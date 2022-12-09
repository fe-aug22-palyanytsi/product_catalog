import { PhoneExtended } from '../../types/PhoneExtended';
import './AboutBlock.scss';

type Props = {
  phoneExtended: PhoneExtended | null;
  capacity?: string;
};

export const AboutBlock: React.FC<Props> = ({ phoneExtended, capacity }) => (
  <div className="about-block">
    <div className="about-block_about">
      <h3 className="about-block_title text-reset">About</h3>
      <hr className="about-block_line" />
      <ul className="list-reset">
        {phoneExtended?.description.map(paragraph => (
          <li key={paragraph.title}>
            <h3 className="about-block_subtitle">{paragraph.title}</h3>
            {paragraph.text.map(elem => (
              <p className="about-block_text" key={elem.slice(4)}>{elem}</p>
            ))}
          </li>
        ))}
      </ul>
    </div>
    <div className="about-block_tech-specs">
      <h3 className="about-block_title text-reset">Tech specs</h3>
      <hr className="about-block_line" />
      <ul className="about-block_list">
        <li className="about-block_characteristics">
          <p className="about-block_characteristic">Screen</p>
          <p className="about-block_number-char">{phoneExtended?.screen}</p>
        </li>
        <li className="about-block_characteristics">
          <p className="about-block_characteristic">Resolution</p>
          <p className="about-block_number-char">
            {phoneExtended?.resolution}
          </p>
        </li>
        <li className="about-block_characteristics">
          <p className="about-block_characteristic">Processor</p>
          <p className="about-block_number-char">
            {phoneExtended?.processor}
          </p>
        </li>
        <li className="about-block_characteristics">
          <p className="about-block_characteristic">RAM</p>
          <p className="about-block_number-char">
            {`${phoneExtended?.ram.slice(0, -2)} ${phoneExtended?.ram.slice(-2)}`}
          </p>
        </li>
        <li className="about-block_characteristics">
          <p className="about-block_characteristic">Built in memory</p>
          <p className="about-block_number-char">
            {`${capacity?.slice(0, -2)} ${capacity?.slice(-2)}`}
          </p>
        </li>
        <li className="about-block_characteristics">
          <p className="about-block_characteristic">Camera</p>
          <p className="about-block_number-char">{phoneExtended?.camera}</p>
        </li>
        <li className="about-block_characteristics">
          <p className="about-block_characteristic">Zoom</p>
          <p className="about-block_number-char">{phoneExtended?.zoom}</p>
        </li>
        <li className="about-block_characteristics">
          <p className="about-block_characteristic">Cell</p>
          <p className="about-block_number-char">
            {phoneExtended?.cell.join(', ')}
          </p>
        </li>
      </ul>
    </div>
  </div>
);
