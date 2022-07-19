import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { BsPatchQuestionFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import Link from 'next/link';
import Button from '../components/Button';

export default function Home() {

  const [question, setQuestion] = useState(false);

  const handleClick = () => {
    setQuestion(!question);
    console.log(question)
  };

  return (
      <>
        <Head>
          <title>Blog</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <AlertWrapper isOpen={question}>

          <AlertBox>

            <h3>Informações</h3>
            <hr/>
            <p>Esse site foi feito com o intuito de aprendizado e diversificação de projetos publicos no meu <a target="_blank" rel="noreferrer" href="https://github.com/yoitscarolinee"><span>GitHub!</span></a></p>
            <p>Esta pagina de forma alguma é mantida com conteúdo de forma "regular" ou "consistente", nada aqui deve ser levado a serio.</p>
            <p>A não ser que você esteja em busca de trabalhar comigo, o codigo dessa pagina é aberto para você analisar as minhas habilidades em tarefas simples tanto do front como do backend.</p>
            <br/>
            <div onClick={handleClick}>

              <Button text="Entendi!" />

            </div>
          </AlertBox>

        </AlertWrapper>

        <Wrapper>


          <Logo>

            <Image
            src="/logo.svg"
            alt="logo"
            layout="fill"
            objectFit='contain'
            />

          </Logo>

          
          <Info onClick={handleClick}>

          <IconContext.Provider value={{ className: "icon" }}>
            <BsPatchQuestionFill />
          </IconContext.Provider>

          </Info >

        </Wrapper>

      </>
  )
}

const AlertBox = styled.div`

  width: 350px;
  height: 500px;
  border-radius: 10px;
  padding: 30px 50px;
  background-color: var(--white);

  & div {
    float: right;
  }

`

const AlertWrapper = styled.div`

  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.7);
  display: ${props => props.isOpen ? "flex" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  align-items: center;
  justify-content: center;

`

const Info = styled.div`

  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(59.95% 59.95% at 50% 100%, #C40052 0%, #1D0F14 100%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`

const Logo = styled.div`
  width: 300px;
  height:150px;
  position: relative;
`