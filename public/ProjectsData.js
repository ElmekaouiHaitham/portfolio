import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3, FaGoogle } from 'react-icons/fa'
import { SiFlask, SiPython, SiFlutter, SiFirebase, SiOpenai } from 'react-icons/si'
import "../styles/globals.css";

const projects = [
    {
        isMobile: false,
        name: "UML TO CODE",
        description:
            "UMLTOCODE is a user-friendly web app that automates the conversion of UML diagrams into code, making it easy and efficient for programmers.",
        previewImg: "/uml.png",
        images: ["/uml.png", "/uml2.png"],
        github: "https://github.com/hqasmei/thankful-thoughts",
        link: "https://thankfulthoughts.io/",
        frameworks: [
            <AiFillHtml5
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
            <FaCss3 size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer" />,
            <SiFlask size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer" />,
            <SiPython size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer" />

        ]
    },
    {
        isMobile: false,
        name: "Learnify",
        description: "Learnify is a website that simplifies the learning process. Users can simply enter any topic they want to learn, and it will generate a personalized roadmap powered by GPT and Google, with clear explanations, examples, external resources, and suggestions for projects to practice on.",
        previewImg: "/Learnify.png",
        images: ["/Learnify.png", "/Learnify2.png", "/Learnify3.png", "/Learnify4.png", "/Learnify5.png", "/Learnify6.png"],
        github: "https://github.com/hqasmei/platoio",
        link: "https://platoio.com/register",
        frameworks: [
            <AiFillHtml5
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
            <SiFirebase
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
            <FaGoogle
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
            <SiOpenai
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />

        ]
    },
    {
        isMobile: true,
        name: "rememberit",
        description:
            "RememberIt is a language learning app utilizing spaced repetition. With diverse question types, including flashcards, audio challenges, and more, RememberIt offers an effective and enjoyable approach to mastering new words and phrases in various languages.",
        previewImg: "/rememberit.png",
        images: ["/rememberit1.jpg", "/rememberit2.jpg", "/rememberit3.jpg", "/rememberit4.jpg", "/rememberit5.jpg", "/rememberit6.jpg", "/rememberit7.jpg",],
        github: "https://github.com/hqasmei/katorfamilyphotos",
        link: "https://katorfamilyphotos.com/",
        frameworks: [
            <SiFlutter
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
            <SiFirebase
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
        ]
    },
    {
        isMobile: true,
        name: "MoneyWise",
        description:
            "I have worked on the UI of a website called MoneyWise.\nMoneyWise is a financial tracking and management website that helps users monitor their income, expenses, and net worth. MoneyWise gives users personalized feedback, and product search for finding the best prices of an item.",
        previewImg: "/moneywise.png",
        images: ["/moneywise.png", "/money1.png", "/money2.png", "/money3.png", "/money4.png", "/money5.png", "/money6.png", "/money7.png",],
        github: "https://github.com/hqasmei/katorfamilyphotos",
        link: "https://katorfamilyphotos.com/",
        frameworks: [
            <SiFlutter
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
            <SiFirebase
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
        ]
    },
]

export default projects;
