
import Head from 'next/head';

import style from './style.module.scss';
import Link from 'next/link';

import Image from 'next/image';
import thumb from '../../../public/images/thumb.png';

import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight} from 'react-icons/fi';

export default function Posts(){
  return(
    <>
     <Head>
       <title>Blog | Sujeito Programador</title>
     </Head>
     <main className={style.container}>
       <div className={style.posts}>
         <Link href="/" legacyBehavior>
          <a>
            <Image 
              src={thumb} 
              alt="Post titulo 1"
              width={720}
              height={410}
              quality={100}
            />
            <strong>Criando meu primeiro aplicativo</strong>
            <time>14 JULHO 2021</time>
            <p>Hoje vamos criar o controle de mostrar a senha no input, uma opção para os nossos formulários de cadastro e login. Mas chega de conversa e bora pro código junto comigo que o vídeo está show de bola!</p>
          </a>
         </Link>

         <div className={style.buttonNavigate}>
            <div>
              <button>
                <FiChevronsLeft size={25} color="#FFF" />
              </button>
              <button>
                <FiChevronLeft size={25} color="#FFF" />
              </button>
            </div>

            <div>
              <button>
                <FiChevronRight size={25} color="#FFF" />
              </button>
              <button>
                <FiChevronsRight size={25} color="#FFF" />
              </button>
            </div>
            
         </div>
       </div>
     </main>
    </>
  )
}