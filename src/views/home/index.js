import React from 'react'

/* Components */
import { Card } from "@components";

/* Services */
import { CharactersService } from "@services";
import { NotificationService } from "@services";

/* View Style */
import './style.css'
export class Home extends React.Component {
    constructor(props) {
        super(props)
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
                .get('')
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
        const { characters } = this.state;
        return (
            <>
                {
                    characters.map((character) => (
                        <Card key={character.id} idCharacter={character.id}></Card>
                    ))
                }
            </>
        )
    }
}
