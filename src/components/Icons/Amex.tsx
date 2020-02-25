import * as React from "react";
import IconBase from "../IconBase";

class AmexIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <g clipPath="url(#clip0)">
          <path d="M16.006 7.986c-1.053-.006-1.228-.025-1.514.138v-.138c-1.259 0-1.486-.048-1.803.144v-.144h-2.172v.141c-.317-.18-.595-.141-2.103-.141v.155c-.175-.103-.403-.155-.675-.155H6.128l-.436.477c-.353-.391-.292-.322-.43-.477h-2.31v2.563h2.279l.447-.483c.353.397.286.325.428.483h1.358c0-.408.003-.23.003-.638.32.005.675-.006.952-.173l-.002.811h1.1c0-.513.002-.205.002-.702.173 0 .214 0 .262.002.002.037 0 0 0 .7 4.244 0 4.052.031 4.352-.125v.125c.967 0 1.523.062 1.875-.169v2.511c0 .736-.597 1.333-1.333 1.333H1.339a1.334 1.334 0 01-1.333-1.333V7.233h.738l.178-.425h.534l.177.425h1.47v-.317c.06.139.03.07.141.317h.82c.067-.153.072-.161.142-.317v.317h3.763v-.697c.178 0 .223-.003.273.005 0 0-.006.303.002.689h1.848v-.247c.205.164.483.247.825.247h.744l.178-.425h.528l.183.425h1.467v-.608c.327.547.216.358.366.608h1.156V4.674H14.43v.512c-.34-.562-.175-.29-.312-.512h-1.202v.573l-.245-.573h-.9c-.01 0-.064.006-.064-.008h-.766c-.356 0-.642.089-.853.258v-.258H8.98v.147c-.3-.17-.575-.141-1.79-.147-.002 0-.322-.003-.322 0H4.01c-.07.17-.19.456-.35.833l-.387-.833H1.994v.586l-.25-.586H.642c-.095.22-.38.889-.642 1.497v-3.05C0 2.377.597 1.78 1.333 1.78h13.334c.736 0 1.333.597 1.333 1.333v4.873h.006zm-5.184-2.24c-.008.006-.039.062-.039.212 0 .166.025.214.03.22.006.002.031.013.095.013l.203-.47-.086-.002c-.156 0-.194.02-.203.028zm-.553 3.637c.256.091.306.264.306.51l-.003.384h-.46l.002-.32c0-.327-.106-.383-.411-.383h-.49l-.002.703H8.75l.003-1.925h1.094c.361 0 .753.064.753.52a.55.55 0 01-.33.51zm-.175-.428c0-.178-.155-.206-.297-.206h-.583v.434h.575c.155 0 .305-.036.305-.228zm5.048-.197h.836v-.406h-.914c-.356 0-.661.184-.661.575 0 .917 1.186.356 1.186.761 0 .142-.12.178-.233.178h-.89l-.002.411h.889c.233 0 .489-.05.625-.247v-.717c-.292-.383-1.092-.036-1.092-.375 0-.16.128-.18.256-.18zm-2.756-.009v-.397h-1.533l-.003 1.925h1.533l.003-.397-1.072-.008v-.384h1.053v-.391h-1.05v-.348h1.07zm1.172 1.114h-.894l-.003.411h.895c.41 0 .727-.155.727-.61 0-.923-1.191-.312-1.191-.731 0-.156.136-.178.255-.178h.845v-.406h-.923c-.355 0-.652.184-.652.575 0 .917 1.186.348 1.186.762-.003.15-.13.177-.245.177zm-2.17-4.408c-.482-.008-.921-.114-.921.547 0 .328.077.553.447.553h.205l.653-1.514h.69l.774 1.817V5.04h.703l.808 1.336V5.041h.47v1.917h-.656l-.867-1.442v1.442h-.936l-.183-.425h-.953l-.178.425h-.533c-.633 0-.917-.328-.917-.945 0-.647.292-.98.945-.98h.447v.422h.003zm.398.68h.633l-.31-.766-.323.767zm-2.017-1.1H9.3v1.926h.47V5.036zM8.711 6.073c.264.091.306.255.306.51v.376h-.461c-.009-.411.1-.697-.412-.697h-.5v.697H7.19V5.033l1.086.008c.37 0 .761.056.761.511a.547.547 0 01-.325.52zm-.186-.425c0-.178-.156-.206-.297-.206h-.584v.425h.575c.159 0 .306-.036.306-.22zM6.872 5.44v-.405H5.331V6.96h1.541v-.398h-1.08V6.18h1.05v-.392h-1.05v-.347h1.08zm-2.35 1.52V5.455l-.666 1.506H3.45l-.667-1.506v1.506h-.939l-.177-.425H.708l-.177.425H.033l.825-1.925h.68L2.32 6.86V5.036h.753l.603 1.305.547-1.305h.767V6.96h-.467zm-3.02-.825l-.319-.767-.31.767h.63zm7.029 2.847c0 .775-.845.647-1.37.647l-.003.647h-.894l-.567-.639-.591.64H3.289l.003-1.926h1.847l.57.634.583-.634h1.464c.433 0 .775.15.775.63zM5.4 9.31l-.497-.562H3.744v.348h1.009v.391H3.744v.384h1.128L5.4 9.31zm1.3-.753l-.703.76.703.781v-1.54zm1.342.425c0-.17-.128-.234-.284-.234h-.597v.49h.589c.164 0 .292-.078.292-.256z" />
        </g>
        <defs>
          <clipPath id="clip0">
            <path d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}

AmexIcon.displayName = "IconAmex";

export default AmexIcon;
