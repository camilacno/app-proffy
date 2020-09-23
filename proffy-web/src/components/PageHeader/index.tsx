import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
  description?: string;
  iconText?: string;
  iconImg?: string;
  backgroundImg?: string;
  pageName?: string;
}

const PageHeader: React.FC<PageHeaderProps> = props => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>

        <p>{props.pageName}</p>

        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <img src={props.backgroundImg} />
        <strong>{props.title}</strong>
        <div className="header-content-description">
          {!!props.description && <p>{props.description}</p>}
          <div className="header-content-iconarea">
            {!!props.iconImg && <img src={props.iconImg} alt="Proffy" />}
            {!!props.iconText && <p>{props.iconText}</p>}
          </div>
        </div>

        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
