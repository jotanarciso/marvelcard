import React from "react";
import { CharactersService } from "@services";
import { NotificationService } from "@services";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.charactersService = new CharactersService();
    this.notificationService = new NotificationService();
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  async getCharacters() {
    try {
      await this.charactersService
        .get()
        .then((response) =>
          this.setState({ characters: response.data.results })
        );
    } catch (error) {
      this.notificationService.error(
        `Não foi possível obter a lista de personagens.`
      );
    }
  }

  render() {
    return <>{console.log(this.state.characters)}</>;
  }
}
