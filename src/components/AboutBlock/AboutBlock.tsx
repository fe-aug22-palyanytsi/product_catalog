import { PhoneExtended } from '../../types/PhoneExtended';
import './AboutBlock.scss';

type Props = {
  phoneExtended: PhoneExtended;
};

export const AboutBlock: React.FC<Props> = ({ phoneExtended }) => {
  const {
    description,
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  } = phoneExtended;

  return (
    <div className="about-block">
      <div className="about-block_about">
        <h3 className="about-block_title">About</h3>
        <hr className="about-block_line" />
        <ul className="list-reset">
          {description.map(paragraph => (
            <li>
              <h3 className="about-block_subtitle">{paragraph.title}</h3>
              {paragraph.text.map(elem => (
                <p className="about-block_text">{elem}</p>
              ))}
            </li>
          ))}
        </ul>
      </div>
      <div className="about-block_tech-specs">
        <h3 className="about-block_title">Tech specs</h3>
        <hr className="about-block_line" />
        <ul className="about-block_list">
          <li className="about-block_characteristics">
            <p className="about-block_characteristic">Screen</p>
            <p className="about-block_number-char">{screen}</p>
          </li>
          <li className="about-block_characteristics">
            <p className="about-block_characteristic">Resolution</p>
            <p className="about-block_number-char">{resolution}</p>
          </li>
          <li className="about-block_characteristics">
            <p className="about-block_characteristic">Processor</p>
            <p className="about-block_number-char">{processor}</p>
          </li>
          <li className="about-block_characteristics">
            <p className="about-block_characteristic">RAM</p>
            <p className="about-block_number-char">{`${ram.slice(0, -2)} ${ram.slice(-2)}`}</p>
          </li>
          <li className="about-block_characteristics">
            <p className="about-block_characteristic">Built in memory</p>
            <p className="about-block_number-char">{`${capacity.slice(0, -2)} ${capacity.slice(-2)}`}</p>
          </li>
          <li className="about-block_characteristics">
            <p className="about-block_characteristic">Camera</p>
            <p className="about-block_number-char">{camera}</p>
          </li>
          <li className="about-block_characteristics">
            <p className="about-block_characteristic">Zoom</p>
            <p className="about-block_number-char">{zoom}</p>
          </li>
          <li className="about-block_characteristics">
            <p className="about-block_characteristic">Cell</p>
            <p className="about-block_number-char">{cell.join(', ')}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
