import React from "react";
import { MarvelService } from "@services";
import { NotificationService } from "@services";
import "./style.css";
import fowardCard from './img/foward.png';
const googleImages = async (character) => {
  const GoogleImages = require("google-images");
  const client = new GoogleImages(
    "002030015187931256738:ax9zxpfhrlg",
    "AIzaSyB36V0LmV5pmwA7txME4McW8MLaKgeBOhM"
  );
  if (localStorage.getItem(character.name) === null) { // If a character image is not fetched before
    await client.search(character.name + "marvel").then((images) => { // get an image 
      console.log(images[0]);
      localStorage.setItem(character.name, images[0].url); // and save it in the local storage
    });
  } else { // if the image was previously fetched,
    character.thumbnail.src = localStorage.getItem(character.name); // just bring it from local storage to avoid exceeding google image request limit
    return character;
  }
  return googleImages(character);
};

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.characterService = new MarvelService();
    this.notificationService = new NotificationService();
    this.state = {
      character: false,
      flip: props.flip ? props.flip : false
    };
  }

  componentDidMount() {
    this.setCharacter(this.props.character);
  }

  nameHaveSpecification(character) {
    let characterName = character.name;
    let characterSpecification = "";
    if (characterName.includes("(", ")")) {
      characterSpecification = characterName
        .substring(characterName.indexOf("(") + 1)
        .replace(")", ""); // save specification without parentheses
      characterName = characterName.substring(0, characterName.indexOf("(")); //  remove specification  from character name
      character.name = characterName;
      character.specification = characterSpecification;
      return character;
    }
    return character;
  }

  async setCharacter(character) {
    if (character) {
      if (this.nameHaveSpecification(character)) {
        // if character name have specification
        console.log(character);
        if (character.thumbnail.path.includes("image_not_available")) {  // img character thumbnail is not available so get thumbnail from google images
          googleImages(character).then(() => {
            this.setState({ character: character });
          });
        } else {
          character.thumbnail.src =
            character.thumbnail.path + "." + character.thumbnail.extension;
          this.setState({ character: character });
        }
      }
    }
  }


  render() {
    const { character } = this.state;
    const thumbnail = character.thumbnail;
    const { flip } = this.state;

    return (
      <>
        {character && (
          <div
            className={character ? "card open-cards" : "card"}
            style={{
              backgroundImage: (flip ? ('url("' + fowardCard + '")') : ('url("' + thumbnail.src + '")'))
            }}
            onClick={() => this.setState({ flip: !flip })}
          >
            <span style={{display: flip && 'none'}} className="id">#{character.id}</span>
            <h2 style={{display: flip && 'none'}}>{character.name}</h2>
            {character.specification && ( // if character has specification show specification
              <>
                <h3 style={{display: flip && 'none'}}>{character.specification}</h3>
              </>
            )}
          </div>
        )
        }
      </>
    );
  }
}
