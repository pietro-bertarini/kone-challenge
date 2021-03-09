import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  DataTableRow,
  DataTableText, HeaderTableRow, HeaderTableText, Table, TableBody, TableHeader,
  OverflowWrapper, BodyHeaderPlayer,
} from './Favorite.styles';
import { IModalState } from '../../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../../Redux/root-reducer';
import ButtonBar from '../../ButtonBar/ButtonBar';
import { updateModalData } from '../../../../Redux/LegoComponents/Modal/Modal.actions';
import { FlexColumnContainer } from '../UploadData/UploadData.styles';
import Checkbox from '../../Checkbox/Checkbox';

const Favorite = () => {
  const dispatch = useDispatch();
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { data, fileName } = modalRedux;
  const tableHeaderKeys = ['Player Name', '#', 'Pos', 'College'];
  const [checked, setChecked] = useState(false);
  function updatePlayerStatus(newStatus: string, index: number) {
    const newData = data;
    newData[index].Status = newStatus;
    if (fileName) dispatch(updateModalData(newData, fileName));
  }
  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <FlexColumnContainer>
      <BodyHeaderPlayer>Player Status</BodyHeaderPlayer>
      <OverflowWrapper>
        <Table>
          <TableHeader>
            <HeaderTableRow>
              {
                tableHeaderKeys.map((key) => (
                  <HeaderTableText>{key}</HeaderTableText>
                ))
              }
            </HeaderTableRow>
          </TableHeader>
          <TableBody>
            {
              data.map((row, index) => (
                <DataTableRow>
                  {
                    tableHeaderKeys.map((key) => {
                      if (key === 'Player Name') {
                        return (<DataTableText>{row[key]}</DataTableText>);
                      }
                      return (
                        <DataTableText>{row[key]}</DataTableText>
                      );
                    })
                  }
                </DataTableRow>
              ))
            }
          </TableBody>
        </Table>
      </OverflowWrapper>
      <ButtonBar />
    </FlexColumnContainer>
  );
};

export default Favorite;