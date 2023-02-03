export default function DescriptionCard({profession, awardsNum, awards, discovered}) {
    return (
      <ul>
        <li>
          <b>Profession: </b> {profession}
        </li>
        <li>
          <b>Awards:</b> {awardsNum} {awards}
        </li>
        <li>
          <b>Discovered: </b> {discovered}
        </li>
      </ul>
    );
  }
  