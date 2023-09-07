package com.backend.services.interfaces;

import java.util.List;

import com.backend.dtos.ConfirmTableReservationDetails;
import com.backend.dtos.ShowReservedTablesDTO;
import com.backend.dtos.TableReservationDTO;
import com.backend.pojos.enums.TableType;

public interface ITableReservationService {
    public ConfirmTableReservationDetails addReservation(TableReservationDTO tableReservationDTO, Long userId,
            TableType tableType);
            public List<ShowReservedTablesDTO> showReservations(Long userId);
}