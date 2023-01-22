import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStethoscope,
  faHeartPulse,
  faGraduationCap,
  faCameraRetro,
  faFilm,
  faHeadphonesSimple,
  faFeatherPointed,
  faEnvelope,
  faKey,
  faEarthAsia
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const Main = () => {
  return (
    <main className="container mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-6 text-sm md:text-base">
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
      <h1 className="heading-text mb-8 text-3xl font-bold md:text-4xl">
        [ Aozaki ]
      </h1>

      <p className="mb-4 break-words md:mb-8">
        <FontAwesomeIcon icon={faStethoscope} /> Doctor /{' '}
        <FontAwesomeIcon icon={faHeartPulse} /> Cardiologist /{' '}
        <FontAwesomeIcon icon={faGraduationCap} /> MD
      </p>

      <p className="mb-4 md:mb-8">
        <FontAwesomeIcon icon={faCameraRetro} /> Photographer /{' '}
        <FontAwesomeIcon icon={faHeadphonesSimple} /> Audiophile /{' '}
        <FontAwesomeIcon icon={faFilm} /> Cinephile
      </p>

      <p className="">
        <FontAwesomeIcon icon={faFeatherPointed} />{' '}
        <a href="https://blog.aozaki.cc/">My Blog</a>
        <span className="px-2"> </span>
        <FontAwesomeIcon icon={faTwitter} />{' '}
        <a
          href="https://twitter.com/Aozaki__"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <span className="px-2"> </span>
        <FontAwesomeIcon icon={faGithub} />{' '}
        <a
          href="https://github.com/aozaki-kuro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>

      <p className="mt-4 md:mt-8">
        <FontAwesomeIcon icon={faEarthAsia} />{' '}
        <a
          href="https://t.aozaki.cc/@aozaki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Misskey
        </a>
        <span className="px-2"> </span>[ @aozaki@t.aozaki.cc ]
      </p>

      <p className="mt-4 md:mt-8">
        <FontAwesomeIcon icon={faKey} />{' '}
        <a href="./pubkey.txt" target="_blank" rel="noopener noreferrer">
          GPG Key
        </a>
        <span className="px-2"> </span>
        <FontAwesomeIcon icon={faEnvelope} />{' '}
        <a href="mailto:i@aozaki.cc">i#aozaki.cc</a>
      </p>
    </main>
  )
}

export default Main
