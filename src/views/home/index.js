import React from "react";
/* Components */
import { Intro } from "@components";
import { Header } from "@components";
import { Card } from "@components";

/* Services */
import { MarvelService } from "@services";
import { NotificationService } from "@services";

/* View Style */
import "./styles.css";

const RANDOM_OFFSET = 0; // Math.floor(Math.random() * 1493);
const QTD_CHARACTERS = 3;

const Search = (props) => {
  return (
    <>
      <div className="col-md-5 mt-3 mb-3">
        <div className="input-group" id="search">
          <input
            type="text"
            className="form-control"
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}
            placeholder="Find character"
          />
          <div className="input-group-append">
            <button
              className="btn text-light font-weight-bold"
              onClick={props.onClick}
              type="button"
            >
              <span>GO!</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.charactersService = new MarvelService();
    this.notificationService = new NotificationService();
    this.state = {
      characters: [],
      isLoading: true,
      inputValue: false, // character name to search
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.getCharacters(this.state.inputValue);
    }
  };

  onChangeInputSearch = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  getCharacterByName = () => {
    this.getCharacters(this.state.inputValue);
  };

  async getCharacters(nameToSearch) {
    try {
      await this.charactersService
        .get(
          "/characters",
          nameToSearch ? nameToSearch : "",
          QTD_CHARACTERS,
          RANDOM_OFFSET
        )
        .then(
          (response) => this.setState({ characters: response.data.results }),
          setTimeout(() => {
            this.setState({ isLoading: false });
          }, 4000)
        );
    } catch (error) {
      this.notificationService.error(
        `Não foi possível obter a lista de personagens.`
      );
    }
  }

  render() {
    const { characters } = this.state;
    var { isLoading } = this.state;
    return (
      <>
        <Header></Header>
        <Intro show={isLoading}></Intro>{" "}
        {/* get characters is done? timeout end? remove intro */}
        <section
          id="home"
          className="justify-content-center align-items-center"
          style={{
            display: isLoading
              ? "none"
              : "flex" /* loading done?? show home  */,
          }}
        >
          <div className="container-fluid">
            <div className="row flex justify-content-center mb-3">
              <Search
                onClick={this.getCharacterByName}
                onKeyPress={this.handleKeyPress}
                onChange={this.onChangeInputSearch}
              ></Search>
            </div>
            <div className="row no-gutters flex justify-content-center">
              {characters.map((character) => (
                <Card key={character.id} character={character}></Card>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}
