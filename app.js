function Navbar() {
    return <>{/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold text-primary" href="#">
                    Sorriso Saudável
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menuNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menuNavbar">
                    <ul className="navbar-nav ms-auto me-3">
                        <li className="nav-item">
                            <a className="nav-link" href="#inicio">Início</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicos">Serviços</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sobre">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contato">Contato</a>
                        </li>
                    </ul>

                    <a className="btn btn-primary" href="#preatendimento">
                        Agendar consulta
                    </a>
                </div>
            </div>
        </nav></>
}
function Hero() {
    return <>{/* HERO */}
        <section id="inicio" className="hero-section d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-6">
                        <h1 className="display-5 fw-bold">
                            Cuide do seu sorriso com profissionais especializados
                        </h1>

                        <p className="lead mt-3">
                            Na Clínica Sorriso Saudável oferecemos atendimento humanizado,
                            tecnologia moderna e foco total no bem-estar dos nossos pacientes.
                        </p>

                        <a href="#preatendimento" className="btn btn-primary btn-lg mt-3">
                            Solicitar atendimento
                        </a>
                    </div>

                    <div className="col-md-6 text-center">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                            className="img-fluid rounded"
                            alt="Atendimento odontológico"
                        />
                    </div>

                </div>
            </div>
        </section></>
}
function CardServico() {
    return <><div className="row g-4">
        {[
            { title: "Limpeza Dental", text: "Remoção de placas bacterianas e prevenção de doenças bucais." },
            { title: "Restauração Dentária", text: "Recuperação da estrutura do dente com materiais modernos e duráveis." },
            { title: "Ortodontia", text: "Correção do alinhamento dos dentes e melhora da estética do sorriso." },
            { title: "Clareamento Dental", text: "Procedimentos seguros para deixar seu sorriso mais branco e saudável." },
        ].map((item, index) => (
            <div className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                        <h5 className="card-title p-2 mb-1">{item.title}</h5>
                        <p className="card-text">{item.text}</p>
                    </div>
                </div>
            </div>
        ))}

    </div></>
}
function Servicos() {
    return <>{/* SERVIÇOS */}
        <section id="servicos" className="py-5 bg-light">
            <div className="container">

                <div className="text-center mb-5">
                    <h2>Nossos Serviços</h2>
                    <p className="text-muted">
                        Tratamentos odontológicos realizados com segurança e qualidade.
                    </p>
                    <CardServico />
                </div>
            </div>
        </section></>
}

function Sobre() {
    return <>{/* SOBRE */}
        <section id="sobre" className="py-5">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-6">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                            className="img-fluid rounded"
                            alt="Consultório odontológico"
                        />
                    </div>

                    <div className="col-md-6">
                        <h2>Sobre a Clínica</h2>

                        <p>
                            A Clínica Sorriso Saudável foi criada com o objetivo de oferecer
                            atendimento odontológico de qualidade, com foco no conforto,
                            na prevenção e na saúde bucal de longo prazo.
                        </p>

                        <p>
                            Nosso compromisso é proporcionar um ambiente acolhedor
                            e tratamentos baseados nas melhores práticas da odontologia moderna.
                        </p>
                    </div>

                </div>
            </div>
        </section></>
}

function Contato() {
    return <>{/* CONTATO*/}
        <section id="sobre" className="py-5">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-6">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                            className="img-fluid rounded"
                            alt="Consultório odontológico"
                        />
                    </div>

                    <div className="col-md-6">
                        <h2>Sobre a Clínica</h2>

                        <p>
                            A Clínica Sorriso Saudável foi criada com o objetivo de oferecer
                            atendimento odontológico de qualidade, com foco no conforto,
                            na prevenção e na saúde bucal de longo prazo.
                        </p>

                        <p>
                            Nosso compromisso é proporcionar um ambiente acolhedor
                            e tratamentos baseados nas melhores práticas da odontologia moderna.
                        </p>
                    </div>

                </div>
            </div>
        </section></>
}
function PreAtendimento() {
    return <>{/* PRÉ-ATENDIMENTO */}
        <section id="preatendimento" className="py-5">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-lg-6">
                        <h2 className="text-center mb-4">Pré-Atendimento</h2>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nome (opcional)</label>
                                <input type="text" className="form-control" placeholder="Seu nome" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Telefone ou Email</label>
                                <input type="text" className="form-control" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Descreva o que você está sentindo</label>
                                <textarea className="form-control" rows="4" required></textarea>
                            </div>

                            <div className="alert alert-secondary small">
                                Seus dados serão utilizados apenas para retorno de contato inicial
                                da clínica. Não solicitamos informações sensíveis.
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Enviar informações
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section></>
}
function Footer() {
    return <>{/* FOOTER */}
        <footer className="bg-dark text-white text-center py-3">
            <p className="mb-0">© 2026 Clínica Sorriso Saudável</p>
        </footer></>
}
function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Servicos />
            <Contato />
            <PreAtendimento />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />)
