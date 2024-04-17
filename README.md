# Chatbot-flow-builder
A simple chatbot flow builder built using React. A chatbot flow is built by connecting the nodes by edges.
This is hosted at https://chatbot-flow-builder-omega.vercel.app/

![Screenshot 2024-04-17 160923](https://github.com/Infinity-code/Chatbot-flow-builder/assets/64525016/df6be3e0-cadb-4a92-8794-696aaf2fdb7e)

## Features
1. Custom nodes can be added based on the functionality. Right now only type of node exist which is a text message node.
![Screenshot 2024-04-17 161031](https://github.com/Infinity-code/Chatbot-flow-builder/assets/64525016/8ad46561-4d6c-4b2d-b17c-ed62f44bc93d)

2. Clicking on the node will open up a settings panel on the right, where one can type a message which gets reflected onto the corresponding node only.
![Screenshot 2024-04-17 161103](https://github.com/Infinity-code/Chatbot-flow-builder/assets/64525016/af047a64-3e26-476b-b7cd-7f75bcd3d8f3)

3. Flow will not be saved if more than one node has empty target handle or there are not nodes on the react-flow pane.
![Screenshot 2024-04-17 161139](https://github.com/Infinity-code/Chatbot-flow-builder/assets/64525016/756a3c2a-db2a-4f14-ac01-c7b1cf641a69)

4. The text inside the text node does not overflow out of the node, instead the node resizes vertically to accommodate the growing length of the message.
![Screenshot 2024-04-17 161556](https://github.com/Infinity-code/Chatbot-flow-builder/assets/64525016/81fb5659-bf04-47d8-85d5-1267e4cb1cc4)

5. Also source handle can send only one edge out but target handles can receive any number of edges.
6. Deleting an edge and adding the same edge is possible, this builder will not ban you from performing such a task (which is important)


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
