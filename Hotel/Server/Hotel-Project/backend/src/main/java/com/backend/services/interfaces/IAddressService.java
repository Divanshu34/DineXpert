package com.backend.services.interfaces;

import java.util.List;
import java.util.Set;



import com.backend.dtos.AddressDTO;

public interface IAddressService {
    
    List<AddressDTO> getAddress(Long userId);
    AddressDTO addAddress(AddressDTO address, Long userId);

}
