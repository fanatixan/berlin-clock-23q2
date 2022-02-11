#!/bin/sh

echo "⏬ Pulling the latest docker base images"
docker-compose pull

echo "🛠 Building images"
docker-compose build --parallel
echo "✅ Completed building the images"

# IBM Cloud API Setup & Login
if ! [ -x "$(command -v ibmcloud)" ]; then
  echo 'IBM Cloud CLI is not installed. Installing...' >&2
  curl -sL https://ibm.biz/idt-installer | bash
fi

IBMCLOUD_URL="https://cloud.ibm.com"
IBMCLOUD_REGION="eu-de"
IBMCLOUD_RESOURCE_GROUP=default

echo "🔐 Logging into IBMCloud"
ibmcloud login -a $IBMCLOUD_URL --apikey $IBMCLOUD_APIKEY --no-region
echo "🎯 Targetting the correct region and resource group"
ibmcloud target -r $IBMCLOUD_REGION
echo "🔐 Logging into the container registry"
ibmcloud cr login

echo "🔖 Tagging the Swagger docker image"
docker tag swaggerapi/swagger-ui:latest de.icr.io/berlinclock/swagger-ui:latest
echo "🔖 Tagging the Berlin Clock docker image"
docker tag berlinclock:latest de.icr.io/berlinclock/berlinclock:latest

echo "⏫ Pushing the Swagger docker image"
docker push de.icr.io/berlinclock/swagger-ui:latest
echo "⏫ Pushing the Berlin clock docker image"
docker push de.icr.io/berlinclock/berlinclock:latest
echo "🏁 Finished publishing the docker images"
