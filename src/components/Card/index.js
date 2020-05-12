import React from "react";
import { CharactersService } from "@services";
import { NotificationService } from "@services";
import "./style.css";

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.charactersService = new CharactersService();
        this.notificationService = new NotificationService();
        this.state = {
            idCharacter: this.props.idCharacter,
            character: {},
        };
    }

    componentDidMount() {
        this.getCharacter();
    }

    async getCharacter() {
        const { idCharacter } = this.state;
        try {
            await this.charactersService
                .get(idCharacter)
                .then((response) =>
                    this.setState({ character: response.data.results[0] })
                );
        } catch (error) {
            this.notificationService.error(`Não foi possível obter o personagem.`);
        }
    }

    render() {
        return <></>;
    }
}
