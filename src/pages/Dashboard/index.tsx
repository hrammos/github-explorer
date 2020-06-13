import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="repository">
          <img
            src="https://avatars0.githubusercontent.com/u/28076738?s=460&u=747958bec107f3abcdd96d687d2b995cc08cc0e8&v=4"
            alt="Henrique Ramos"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easya peasy highly scalabe ReactJS & React Native forms</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="repository">
          <img
            src="https://avatars0.githubusercontent.com/u/28076738?s=460&u=747958bec107f3abcdd96d687d2b995cc08cc0e8&v=4"
            alt="Henrique Ramos"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easya peasy highly scalabe ReactJS & React Native forms</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="repository">
          <img
            src="https://avatars0.githubusercontent.com/u/28076738?s=460&u=747958bec107f3abcdd96d687d2b995cc08cc0e8&v=4"
            alt="Henrique Ramos"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easya peasy highly scalabe ReactJS & React Native forms</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
