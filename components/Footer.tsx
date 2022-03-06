import { Nextdotjs, Tailwindcss, Typescript } from '@icons-pack/react-simple-icons'

const Footer = () => {
  return (
    <footer className="text-sm text-center p-6 primary-text">
      <div className="space-x-2 inline-flex items-center my-2">
        <Nextdotjs size={16} />
        <Tailwindcss size={16} />
        <Typescript size={16} />
      </div>
      <div className='mb-1'>Built by Aozaki</div>
      <div>©️ 2014 - {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer
