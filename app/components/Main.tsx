import {
  faDiscord,
  faGithub,
  faMastodon,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faCameraRetro,
  faEnvelope,
  faFeatherPointed,
  faFilm,
  faGraduationCap,
  faHeadphonesSimple,
  faHeartPulse,
  faStethoscope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

import Avatar from '#images/avatar.webp'

const Main = () => {
  return (
    <div className="container mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-6 text-center text-sm md:text-base">
      <div className="mb-6 md:mb-10">
        <Image
          className="rounded-full transition-all duration-100"
          src={Avatar}
          alt="Aozaki's avatar"
          width={120}
          height={120}
          placeholder="blur"
          // priority
        />
      </div>
      <h1 className="mb-6 text-3xl font-bold text-zinc-200 md:mb-8 md:text-4xl">[ Aozaki ]</h1>

      {/* Introduction Words */}
      <div className="bg-[#111729]">
        <p className="mb-3 break-words md:mb-8">
          <FontAwesomeIcon icon={faStethoscope} /> Doctor / <FontAwesomeIcon icon={faHeartPulse} />{' '}
          Cardiologist / <FontAwesomeIcon icon={faGraduationCap} /> MD
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
          <span className="px-2" />
          <FontAwesomeIcon icon={faTwitter} />{' '}
          <Link href="https://310.im/x" target="_blank" rel="noopener noreferrer" className="">
            Twitter
          </Link>
          <span className="px-2" />
          <FontAwesomeIcon icon={faMastodon} />{' '}
          <Link href="https://310.im/ms" target="_blank" rel="me noopener noreferrer" className="">
            Mastodon
          </Link>
          <span className="px-2" />
          <FontAwesomeIcon icon={faGithub} />{' '}
          <Link href="https://310.im/gh" target="_blank" rel="noopener noreferrer" className="">
            Github
          </Link>
        </p>
      </div>

      {/* Social Links */}
      <div className="bg-[#111729] text-center">
        <p className="mt-3 md:mt-8">
          <FontAwesomeIcon icon={faDiscord} />{' '}
          <Link href="https://310.im/dc" target="_blank" rel="me noopener noreferrer" className="">
            Discord
          </Link>
          <span className="px-2" />
          <FontAwesomeIcon icon={faTelegram} />{' '}
          <Link href="https://310.im/tg" target="_blank" rel="me noopener noreferrer" className="">
            Telegram
          </Link>
        </p>

        <p className="mt-3 md:mt-8">
          <FontAwesomeIcon icon={faEnvelope} /> <Link href="mailto:i@aozaki.cc">i#aozaki.cc</Link>
        </p>
      </div>
    </div>
  )
}

export default Main
