import { api, FullSpecieData } from "./generated";
import { SdkgenHttpServer } from "@sdkgen/node-runtime";
const server = new SdkgenHttpServer(api, {});
server.listen(8000);


api.fn.sayHello = async (ctx, args) => {
    return `hi ${args.name}!`
}

api.fn.sum = async (ctx, args) => {
    return args.numberA + args.numberB;
}

api.fn.getSpecies= async (ctx, args) => {

    const duck: FullSpecieData = {
        name: "Duck",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Aves"
    }
    const tiger: FullSpecieData = {
        name: "Tiger",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Mammalia"
    }
    const octopus: FullSpecieData = {
        name: "Octopus",
        kingdom: "Animalia",
        phylum: "Mollusca",
        class: "Cephalopoda"
    }
    const carnivorousPlant: FullSpecieData = {
        name: "Nepenthes lowii",
        kingdom: "Plantae",
        phylum: null,
        class: null
    }

    return [
        duck,
        tiger,
        octopus,
        carnivorousPlant
    ]
}


api.fn.getPost = async (ctx, {id}) => {
    return {
        id,
        title: "Getting Started",
        author: {
            name: "John Doe"
        },
        body: "Lorem ipsum",
        createdAt: new Date(),
    };
};
