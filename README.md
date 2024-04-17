# Chatbot-flow-builder
A simple chatbot flow builder built using React. A chatbot flow is built by connecting the nodes by edges. 

## Features
1. It is built using react-flow library, so this can be customized.
2. Custom nodes can be added based on the functionality. Right now only type of node exist which is a text message node.
3. Clicking on the node will open up a settings panel on the right, where one can type a message which gets reflected onto the corresponding node only.
4. If you delete an edge between two nodes, you would not able locked out from not drawing the edge between the same nodes.
5. The text inside the text node does not overflow out of the node, instead the node resizes vertically to accommodate the growing length of the message.

## Setting up the project locally
To set up the project locally, run the following command. This download all the dependencies.
````
npm install
````
## Run
To run the project, following command is used.
````
npm run dev
````
