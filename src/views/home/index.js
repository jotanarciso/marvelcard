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

const RANDOM_OFFSET = Math.floor(Math.random() * 1493);
const QTD_CHARACTERS = 3;
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.charactersService = new MarvelService();
    this.notificationService = new NotificationService();
    this.state = {
      characters: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  async getCharacters() {
    try {
      await this.charactersService
        .get("/characters", QTD_CHARACTERS, RANDOM_OFFSET)
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
          style={{ display: isLoading ? "none" : "flex" }}>  {/* loading done?? show home  */}
          <div className="container-fluid">
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
