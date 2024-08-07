const chats = [
    {
        isGroupChat: false,
        users: [
        {
            name: "John Doe",
            email: "john@example.com",
        },
        {
            name: "Piyush",
            email: "piyush@example.com",
        },
        ],
        _id: "1",
        chat_name: "John Doe",
    },
    {
        isGroupChat: true,
        users: [
        {
            name: "John Doe",
            email: "john@example.com",
        },
        {
            name: "Piyush",
            email: "piyush@example.com",
        },
        {
            name : "Guest User",
            email : "Guest@example.com"
        }
        ],
        _id: "2",
        chat_name: "Guest User",
    }
];

module.exports = {chats}