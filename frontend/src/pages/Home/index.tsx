import axios from "axios";
import Footer from "components/Footer";
import Header from "components/Header";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "utils/requests";


export default function Home() {

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount`)
            .then(response => {
                console.log("Ativando o heroku antes de você clicar, pra otimizar sua experiencia quando tentar acessar o dashboard");
            })
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">rsouza-DSVendas</h1>
                    <p className="lead">Relatório consolidado de vendas para insights de sua empresa!</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um backend construído com Spring Boot.</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Acessar o Dashboard
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}   