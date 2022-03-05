import Image from 'next/image'
import { Mail } from 'react-feather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStethoscope,
  faHeartPulse,
  faGraduationCap,
  faCameraRetro,
  faFilm,
  faHeadphonesSimple,
  faFeatherPointed,
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const Main = () => {
  return (
    <main className="container flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
      <div className="mb-8">
        <Image
          className="rounded-full transition-all duration-100"
          src="/images/avatar.jpg"
          alt="avatar"
          width={120}
          height={120}
          priority
        />
      </div>
      <h1 className="font-bold mb-8 text-5xl heading-text">Aozaki Kuro</h1>

      <p className="mb-8 text-lg">
        <FontAwesomeIcon icon={faStethoscope} /> Doctor / <FontAwesomeIcon icon={faHeartPulse} />{' '}
        Cardiologist / <FontAwesomeIcon icon={faGraduationCap} /> PhD , MMed
      </p>

      <p className="mb-8 text-lg">
        <FontAwesomeIcon icon={faCameraRetro} /> Part-time photographer /{' '}
        <FontAwesomeIcon icon={faHeadphonesSimple} /> Audiophile / <FontAwesomeIcon icon={faFilm} />{' '}
        Cinephile
      </p>

      <p className="text-lg">
        <FontAwesomeIcon icon={faFeatherPointed} />{' '}
        <a href="https://blog.aozaki.cc/" target="_blank" rel="noopener noreferrer">
          My Blog
        </a>
        <span className="px-2"> </span>
        <FontAwesomeIcon icon={faTwitter} />{' '}
        <a href="https://twitter.com/Aozaki__" target="_blank" rel="noopener noreferrer">
          @Aozaki
        </a>
        <span className="px-2"> </span>
        <FontAwesomeIcon icon={faGithub} />{' '}
        <a href="https://github.com/aozaki-kuro" target="_blank" rel="noopener noreferrer">
          aozaki-kuro
        </a>
      </p>

      <p className="mt-8 flex space-x-2 items-center text-lg">
        <Mail size={15} />
        <a href="mailto:aozaki.blog@gmail.com">aozaki.blog#gmail.com</a>
      </p>
    </main>
  )
}

export default Main
