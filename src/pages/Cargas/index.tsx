/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import clsx from 'clsx';
import sideBarState from '../../recoil/atom';
import useStyles from './styles';
import useWindowDimensions from '../../utils/windowsDimension';
import Lista from '../../components/List/list';
import CargaService from '../../services/CargaService';

const CargasPage = () => {
  const [pageState, setPageState] = useState({
    cargasList: [],
  });

  useEffect(() => {
    CargaService.getCarga()
      .then((data) => {
        setPageState({
          ...pageState,
          cargasList: data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(sideBarState);

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <Lista />
    </div>
  );
};

export default CargasPage;
