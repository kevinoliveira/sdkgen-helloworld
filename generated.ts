import { BaseApiConfig, Context, SdkgenError } from "@sdkgen/node-runtime";

export type BiologyKingdom = "Animalia" | "Plantae" | "Fungi" | "Protista" | "Monera";

export type BiologyPhylum = "Acanthocephala" | "Annelida" | "Arthropoda" | "Brachiopoda" | "Bryozoa" | "Chaetognatha" | "Chordata" | "Cnidaria" | "Ctenophora" | "Cycliophora" | "Echinodermata" | "Entoprocta" | "Gastrotricha" | "Gnathostomulida" | "Hemichordata" | "Kinorhyncha" | "Loricifera" | "Micrognathozoa" | "Mollusca" | "Nematoda" | "Nematomorpha" | "Nemertea" | "Onychophora" | "Orthonectida" | "Phoronida" | "Placozoa" | "Platyhelminthes" | "Porifera" | "Priapulida" | "Rhombozoa" | "Rotifera" | "Sipuncula" | "Tardigrada" | "Xenacoelomorpha";

export interface PostAuthor {
    name: string
}

export interface Post {
    id: string
    title: string
    body: string
    createdAt: Date
    author: PostAuthor
}

export interface SimpleSpecie {
    name: string
}

export interface ScientificClassification {
    kingdom: BiologyKingdom
    phylum: BiologyPhylum | null
    class: string | null
}

export interface FullSpecieData {
    name: string
    kingdom: BiologyKingdom
    phylum: BiologyPhylum | null
    class: string | null
}

export class Fatal extends SdkgenError {}

export class ApiConfig<ExtraContextT> extends BaseApiConfig<ExtraContextT> {
    fn!: {
        getPost: (ctx: Context & ExtraContextT, args: {id: string}) => Promise<Post | null>
        sayHello: (ctx: Context & ExtraContextT, args: {name: string}) => Promise<string>
        sum: (ctx: Context & ExtraContextT, args: {numberA: number, numberB: number}) => Promise<number>
        getSpecies: (ctx: Context & ExtraContextT, args: {}) => Promise<FullSpecieData[]>
    }

    err = {
        Fatal(message: string = "") { throw new Fatal(message); }
    }

    astJson = {
        typeTable: {
            PostAuthor: {
                name: "string"
            },
            Post: {
                id: "uuid",
                title: "string",
                body: "string",
                createdAt: "datetime",
                author: "PostAuthor"
            },
            SimpleSpecie: {
                name: "string"
            },
            ScientificClassification: {
                kingdom: "BiologyKingdom",
                phylum: "BiologyPhylum?",
                class: "string?"
            },
            FullSpecieData: {
                name: "string",
                kingdom: "BiologyKingdom",
                phylum: "BiologyPhylum?",
                class: "string?"
            },
            BiologyKingdom: [
                "Animalia",
                "Plantae",
                "Fungi",
                "Protista",
                "Monera"
            ],
            BiologyPhylum: [
                "Acanthocephala",
                "Annelida",
                "Arthropoda",
                "Brachiopoda",
                "Bryozoa",
                "Chaetognatha",
                "Chordata",
                "Cnidaria",
                "Ctenophora",
                "Cycliophora",
                "Echinodermata",
                "Entoprocta",
                "Gastrotricha",
                "Gnathostomulida",
                "Hemichordata",
                "Kinorhyncha",
                "Loricifera",
                "Micrognathozoa",
                "Mollusca",
                "Nematoda",
                "Nematomorpha",
                "Nemertea",
                "Onychophora",
                "Orthonectida",
                "Phoronida",
                "Placozoa",
                "Platyhelminthes",
                "Porifera",
                "Priapulida",
                "Rhombozoa",
                "Rotifera",
                "Sipuncula",
                "Tardigrada",
                "Xenacoelomorpha"
            ]
        },
        functionTable: {
            getPost: {
                args: {
                    id: "uuid"
                },
                ret: "Post?"
            },
            sayHello: {
                args: {
                    name: "string"
                },
                ret: "string"
            },
            sum: {
                args: {
                    numberA: "int",
                    numberB: "int"
                },
                ret: "int"
            },
            getSpecies: {
                args: {},
                ret: "FullSpecieData[]"
            }
        },
        errors: [
            "Fatal"
        ],
        annotations: {}
    }
}

export const api = new ApiConfig<{}>();
