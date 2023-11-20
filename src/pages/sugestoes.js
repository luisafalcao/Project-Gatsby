import * as React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../components/layout'
import "./sugestoes.css"

const SugestoesPage = () => {

    const {register, handleSubmit, formState: { errors }, reset} = useForm();
    const [modalOpen, setModalOpen] = useState(false)

    const encode = data => {
        return Object.keys(data)
        .map(key=> encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    }

    const onSubmit = dados => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "form_hook", ...dados } )
        }).then(() => {
            setModalOpen(true)
            setTimeout(() => {
                setModalOpen(false);
            }, 3000);
            reset();
        }).catch(error => alert(error))
    }

    return (
        <Layout>
            <h2>Deixe sugestões aqui:</h2>
            {modalOpen &&
            (<div className="modal">
                <p>Sugestão enviada com sucesso!</p>
            </div>)}
            <form name="form_sugestoes" method="post" onSubmit={handleSubmit(onSubmit)} data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="form_sugestoes"/>
                <label>
                    <input type="text" name="nome" {...register("nome", { required: true, maxLength: 20 })} placeholder="Nome"/>
                    {errors.nome && errors.nome.type === "required" && (
                        <span className='erro'>Campo obrigatório</span>
                    )}
                    {errors.nome && errors.nome.type === "maxLength" && (
                        <span className="erro">Máximo 20 caracteres</span>
                    )}
                </label>
                <label>
                    <input type="email" name="email" {...register("email", {
                        required: true,
                        pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
                    })} placeholder='Email'/>
                    {errors.email && errors.email.type === "required" && (
                        <span className='erro'>Campo obrigatório</span>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <span className="erro">Email inválido</span>
                    )}
                </label>
                <label>
                    <input type="text" name="assunto" {...register("assunto", { required: true, maxLength: 100 })} placeholder='Assunto'/>
                    {errors.assunto && errors.assunto.type === "maxLength" && (
                        <span className="erro">Máximo 100 caracteres</span>
                    )}
                </label>
                <label>
                    <textarea name="mensagem" rows="5" {...register("mensagem")} placeholder='Mensagem'/>
                </label>
                <div className='btn-wrapper'>
                    <input type="submit" value="Enviar" />
                    <input type="reset" value="Limpar" />
                </div>
            </form>
        </Layout>
    )
}

export const Head = () => <title>Sugestões</title>

export default SugestoesPage