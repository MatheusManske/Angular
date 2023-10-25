import { Classe } from "./classe";

export interface Filmes {
    _id: string;
    nome: string;
    classe: Classe;
    categoria: string,
    ano: string,
    sinopse: string
}
