import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getImageHero } from '../../shared/constants';
import { handleReturnNavigate } from '../../UI/tools/handles';
import { getHeroById } from './../../shared/selectors';

const HeroScreen = () => {
  const navigate = useNavigate();

  const { idHero } = useParams();
  const hero = useMemo(() => getHeroById(idHero), [idHero]);

  if (!hero) {
    return <Navigate to="/404" />;
  }

  const { alter_ego, characters, first_appearance, id, publisher, superhero } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={getImageHero(id)}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3"> Characteres</h5>
        <p>{characters}</p>
        <button
          className="btn btn-outline-info"
          onClick={() => handleReturnNavigate(navigate)}
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
