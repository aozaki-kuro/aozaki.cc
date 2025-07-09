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

const Main = () => {
  return (
    <div className="container mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-6 text-center text-sm md:text-base">
      <div className="mb-6 md:mb-10">
        <img
          className="rounded-full transition-all duration-100"
          src="/images/avatar.webp"
          alt="Aozaki's avatar"
          width={120}
          height={120}
        />
      </div>
      <h1 className="mb-6 text-3xl font-bold text-zinc-200 md:mb-8 md:text-4xl">[ Aozaki ]</h1>

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

        <p>
          <FontAwesomeIcon icon={faFeatherPointed} />{' '}
          <a href="https://blog.aozaki.cc/">My Blog</a>
          <span className="px-2" />
          <FontAwesomeIcon icon={faTwitter} />{' '}
          <a href="https://310.im/x" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <span className="px-2" />
          <FontAwesomeIcon icon={faMastodon} />{' '}
          <a href="https://310.im/ms" target="_blank" rel="me noopener noreferrer">
            Mastodon
          </a>
          <span className="px-2" />
          <FontAwesomeIcon icon={faGithub} />{' '}
          <a href="https://310.im/gh" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </p>
      </div>

      {/* Social Links */}
      <div className="bg-night-blue text-center">
        <p className="mt-3 md:mt-8">
          <FontAwesomeIcon icon={faDiscord} />{' '}
          <a href="https://310.im/dc" target="_blank" rel="me noopener noreferrer">
            Discord
          </a>
          <span className="px-2" />
          <FontAwesomeIcon icon={faTelegram} />{' '}
          <a href="https://310.im/tg" target="_blank" rel="me noopener noreferrer">
            Telegram
          </a>
        </p>

        <p className="mt-3 md:mt-8">
          <FontAwesomeIcon icon={faEnvelope} />{' '}
          <a href="mailto:i@aozaki.cc">i#aozaki.cc</a>
        </p>
      </div>
    </div>
  )
}

export default Main
