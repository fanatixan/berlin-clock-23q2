#/bin/sh

# IBM Cloud API Setup & Login
if ! [ -x "$(command -v ibmcloud)" ]; then
  echo 'IBM Cloud CLI is not installed. Installing...' >&2
  curl -sL https://ibm.biz/idt-installer | bash
fi

IBMCLOUD_URL="https://cloud.ibm.com"
IBMCLOUD_REGION="eu-de"
IBMCLOUD_RESOURCE_GROUP=Default
IMAGE_URL=de.icr.io
NAMESPACE=berlin-clock

echo "🔐 Logging into IBMCloud"
ibmcloud login -a $IBMCLOUD_URL --apikey $IBMCLOUD_APIKEY --no-region
echo "🎯 Targetting the correct region and resource group"
ibmcloud target -r $IBMCLOUD_REGION -g $IBMCLOUD_RESOURCE_GROUP
echo "🔐 Logging into the container registry"
ibmcloud cr login

APP_NAME=berlinclockapp
IMAGE=berlinclock
echo "👌 Select the berlin-clock project"
ibmcloud ce project select --name berlin-clock
ehco "💿 Update the Berlin Clock app"
ibmcloud ce app update --name $APP_NAME --image $IMAGE_URL/$NAMESPACE/$IMAGE --registry-secret berlinclock
echo "🖨 Details of the Berlin Clock URL"
ibmcloud ce app get --name $APP_NAME --output url

APP_NAME=berlinclock-swaggerapp
IMAGE=swagger-ui
ehco "💿 Update the Swagger app"
ibmcloud ce app update --name $APP_NAME --image $IMAGE_URL/$NAMESPACE/$IMAGE --registry-secret berlinclock
echo "🖨 Details of the Swagger URL"
ibmcloud ce app get --name $APP_NAME --output url