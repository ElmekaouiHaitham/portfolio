import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3, FaGoogle } from 'react-icons/fa'
import { SiSqlite, SiFlask, SiPython, SiFlutter, SiFirebase, SiOpenai, SiNextdotjs, SiScikitlearn } from 'react-icons/si'
import "../styles/globals.css";

const projects = [
    {
        isMobile: false,
        name: "Ecommerce web app",
        description:
            "Zhirictronics est un site web d'e-commerce créé avec Next.js pour le front-end et Flask avec SQLite pour le back-end (panel de contrôle). Le vendeur peut ajouter, modifier et suivre les produits. Découvrez-le ici : https://github.com/ElmekaouiHaitham/ecommerce.",
        previewImg: "/ecommerce1.png",
        images: ["/ecommerce1.png", "/ecommerce2.png", "/ecommerce3.png", "/ecommerce4.png", "/ecommerce5.png", "/ecommerce6.png", "/ecommerce7.png",],
        frameworks: [
            <SiPython
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
            <SiNextdotjs
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
            <SiSqlite
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
            <SiFlask
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
        ]
    },
    {
        isMobile: false,
        name: "Rabat Weather app",
        description:
            "Rabat Weather est une application web qui fournit des données météorologiques actuelles et des prévisions sur 24 heures pour la température et la probabilité de pluie à Rabat. check it out on: https://github.com/ElmekaouiHaitham/weather-app",
        previewImg: "/weather.png",
        images: ["/weather.png",],
        frameworks: [
            <SiPython
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
            <SiNextdotjs
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
            <SiScikitlearn
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
            <SiFlask
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
            />,
        ]
    },

    {
        isMobile: false,
        name: "UML TO CODE",
        description:
            "UMLTOCODE est une application web conviviale qui automatise la conversion des diagrammes UML en code, facilitant ainsi le travail des programmeurs.",
        previewImg: "/uml.png",
        images: ["/uml.png", "/uml2.png"],
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
        description: "Learnify est un site web qui simplifie le processus d'apprentissage. Les utilisateurs peuvent simplement entrer le sujet qu'ils souhaitent apprendre, et il générera une feuille de route personnalisée alimentée par GPT et Google, avec des explications claires, des exemples, des ressources externes et des suggestions de projets pour s'entraîner.",
        previewImg: "/Learnify.png",
        images: ["/Learnify.png", "/Learnify2.png", "/Learnify3.png", "/Learnify4.png", "/Learnify5.png", "/Learnify6.png"],
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
            "RememberIt est une application d'apprentissage des langues utilisant la répétition espacée. Avec divers types de questions, y compris des flashcards, des défis audio, et plus encore, RememberIt offre une approche efficace et agréable pour maîtriser de nouveaux mots et phrases dans différentes langues.",
        previewImg: "/rememberit.png",
        images: ["/rememberit1.jpg", "/rememberit2.jpg", "/rememberit3.jpg", "/rememberit4.jpg", "/rememberit5.jpg", "/rememberit6.jpg", "/rememberit7.jpg",],
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
        isMobile: false,
        name: "MoneyWise",
        description:
            "J'ai travaillé sur l'interface utilisateur d'un site web appelé MoneyWise. MoneyWise est un site de suivi et de gestion financière qui aide les utilisateurs à surveiller leurs revenus, leurs dépenses et leur valeur nette. MoneyWise offre des commentaires personnalisés aux utilisateurs et une recherche de produits pour trouver les meilleurs prix d'un article.",
        previewImg: "/moneywise.png",
        images: ["/moneywise.png", "/money1.png", "/money2.png", "/money3.png", "/money4.png", "/money5.png", "/money6.png", "/money7.png",],
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
