# cryptatlas backend

## Deploying crypt-node through Heroku/Docker using an Apple M1

Had to jump through a couple hoops to deploy this baby. I don't want to assign blame to Heroku, Docker, node:16 or Apple M1 _cough, cough_, but if you don't specify the build platform using `buildx` instead of deploying normally using `build`, Heroku puts your container into a triangle choke. However locally, both build methods work.

`docker buildx build --platform linux/amd64 -t <image name> -f Dockerfile .`

`docker tag <image name> registry.heroku.com/<heroku repository name>/web`

`docker push registry.heroku.com/<heroku repository name>/web`

`heroku container:release web -a <heroku repository name>`

If you're getting a _unauthorized: authentication required_ when pushing, either:

`heroku container:login` or you aren't pushing to an existing heroku repository.
