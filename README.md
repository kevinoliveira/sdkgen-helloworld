# sdkgen-helloworld
Just to showcase how simple it is.


## Generate types
```
sdkgen example.sdkgen -t typescript_nodeserver -o generated.ts
````
or
```
npm run generate
```

## Running
```
ts-node main.ts
```
or
```
npm run start
```

default server port 8000


## Local playground 
http://localhost:8000/playground


## Structure description

- SDKGEN definition files
    - example.sdkgen
    - anotherFile.sdkgen 
- SDKGEN generated file
    - generated.ts
- server logic and setup
    - main.ts