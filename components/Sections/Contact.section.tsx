import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  FaDiscord,
} from "../Icons";

import { Icon } from "../Misc/Icon.component";

const Contact = () => {
  return (
    <div className="font-sen px-3" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/kr-anurag" />

        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/kr_anurag_"
        />

        <Icon icon={<MdEmail />} url="mailto:kr.anurag24@gmail.com" />

        <Icon
          icon={<FaDiscord />}
          url="https://discord.com/users/849171428497424404"
        />

        <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/user/31l2fev6wn2mtzclbpvzxis3x77q"
        />
      </div>
    </div>
  );
};

export default Contact;
