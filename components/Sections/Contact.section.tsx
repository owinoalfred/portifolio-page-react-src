import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiTwotonePhone,
  FaDiscord,
} from "../Icons";

import { Icon } from "../Misc/Icon.component";

const Contact = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/owinoalfred" />

        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/oweeziearl"
        />

        <Icon icon={<MdEmail />} url="mailto:ogzialfred@gmail.coml.com" />
        <Icon
          icon={< AiTwotonePhone  />}
          url="tel:+256-787-523-137"
        />
      </div>
    </div>
  );
};

export default Contact;
