import styles from './Contato.module.css';

function Contato() {
    return (
        <main className={styles.contatoContainer}>
            <div className={styles.conteudo}>
                
                {/* Lado Esquerdo - Informações */}
                <div className={styles.infoSide}>
                   
                    <h1 className={styles.titulo}>Fale conosco</h1>
                    <p className={styles.descricao}>
                        Estamos aqui para tornar sua experiência ainda melhor.
                    </p>

                    <div className={styles.contatosLista}>
                        <p>📞 (11) 99999-9999</p>
                        <p>✉️ contato@lotusspa.com.br</p>
                        <p>📍 Rua das Flores, 123 - São Paulo - SP</p>
                    </div>

                    <div className={styles.redesSociais}>
                        <span>Siga-nos</span>
                        <div className={styles.icones}>
                            {/* Substitua por ícones reais se estiver usando uma biblioteca */}
                            <span>📸</span> <span>f</span>
                        </div>
                    </div>
                </div>

                {/* Lado Direito - Formulário */}
                <div className={styles.formSide}>
                    <form className={styles.formulario}>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Nome" />
                            <input type="email" placeholder="E-mail" />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Telefone" />
                            <select>
                                <option value="">Assunto</option>
                                <option value="agendamento">Agendamento</option>
                            </select>
                        </div>
                        <textarea placeholder="Mensagem"></textarea>
                        <button type="submit" className={styles.botaoEnviar}>
                            ENVIAR MENSAGEM
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Contato;