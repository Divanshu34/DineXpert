package com.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dtos.CancelledTableDTO;
import com.backend.dtos.ConfirmTableReservationDetails;
import com.backend.dtos.ShowReservedTablesDTO;
import com.backend.dtos.TableReservationDTO;
import com.backend.pojos.enums.TableType;
import com.backend.services.CancelledTableService;
import com.backend.services.interfaces.ITableReservationService;

@RestController
@RequestMapping("/reservation")
@CrossOrigin(origins = "*")
public class TableReservationController {
    @Autowired
    private ITableReservationService tableReservationService;
    
    @Autowired
    private CancelledTableService cancelledTableService;

    @PostMapping("/add-reservation/{userId}/{tableType}")
    public ConfirmTableReservationDetails addReservation(@RequestBody TableReservationDTO tableReservationDTO, @PathVariable Long userId, @PathVariable TableType tableType){
        return tableReservationService.addReservation(tableReservationDTO, userId, tableType);
        
    }

    @GetMapping("/{userId}")
    public List<ShowReservedTablesDTO> showReservations(@PathVariable Long userId){
        return tableReservationService.showReservations(userId);
    }

    @PostMapping("/cancel-reservation")
    public CancelledTableDTO cancelTable(@RequestBody CancelledTableDTO cancelledTableDTO){
        return cancelledTableService.cancelTable(cancelledTableDTO);
    }
}
