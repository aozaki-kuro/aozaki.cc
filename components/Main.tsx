import Image from 'next/image'
import Link from 'next/link'
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
  faKey
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithub,
  faMastodon
} from '@fortawesome/free-brands-svg-icons'

const Main = () => {
  return (
    <main className="container mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-6 text-center text-sm md:text-base">
      <div className="mb-6 md:mb-10">
        <Image
          className="rounded-full transition-all duration-100"
          src="/images/avatar.jpg"
          alt="avatar"
          width={120}
          height={120}
          priority
        />
      </div>
      <h1 className="mb-6 text-3xl font-bold text-zinc-200 md:mb-8 md:text-4xl">
        [ Aozaki ]
      </h1>

      {/* Introduction Words */}
      <div className="bg-night-blue">
        <p className="mb-3 break-words md:mb-8">
          <FontAwesomeIcon icon={faStethoscope} /> Doctor /{' '}
          <FontAwesomeIcon icon={faHeartPulse} /> Cardiologist /{' '}
          <FontAwesomeIcon icon={faGraduationCap} /> MD
        </p>

        <p className="mb-3 md:mb-8">
          <FontAwesomeIcon icon={faCameraRetro} /> Photographer /{' '}
          <FontAwesomeIcon icon={faHeadphonesSimple} /> Audiophile /{' '}
          <FontAwesomeIcon icon={faFilm} /> Cinephile
        </p>

        <p className="">
          <FontAwesomeIcon icon={faFeatherPointed} />{' '}
          <Link href="https://blog.aozaki.cc/" className="">
            My Blog
          </Link>
          <span className="px-2"> </span>
          <FontAwesomeIcon icon={faTwitter} />{' '}
          <Link
            href="https://twitter.com/Aozaki__"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Twitter
          </Link>
          <span className="px-2"> </span>
          <FontAwesomeIcon icon={faGithub} />{' '}
          <Link
            href="https://github.com/aozaki-kuro"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Github
          </Link>
        </p>
      </div>

      {/* Social Links */}
      <div className="bg-night-blue text-center">
        <p className="mt-3 md:mt-8">
          <FontAwesomeIcon icon={faMastodon} />{' '}
          <Link
            href="https://m.cmx.im/@aozaki"
            target="_blank"
            rel="me noopener noreferrer"
            className=""
          >
            Mastodon
          </Link>
        </p>

        <p className="mt-3 md:mt-8">
          <FontAwesomeIcon icon={faKey} />{' '}
          <Link
            href="./pubkey.txt"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            GPG Key
          </Link>
          <span className="px-2"> </span>
          <FontAwesomeIcon icon={faEnvelope} />{' '}
          <Link href="mailto:i@aozaki.cc">i#aozaki.cc</Link>
        </p>
      </div>
    </main>
  )
}

export default Main
