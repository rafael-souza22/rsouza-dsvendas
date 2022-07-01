package com.rafaelsouza.dsvendas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rafaelsouza.dsvendas.dto.SaleDTO;
import com.rafaelsouza.dsvendas.dto.SaleSuccessDTO;
import com.rafaelsouza.dsvendas.dto.SaleSumDTO;
import com.rafaelsouza.dsvendas.repositories.SaleRepository;
import com.rafaelsouza.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;

	@Autowired
	private SellerRepository sellerRepository;

	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) {
		sellerRepository.findAll();
		return repository.findAll(pageable).map(obj -> {
			return new SaleDTO(obj);
		});
	}

	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupedBySeller() {
		sellerRepository.findAll();
		return repository.amountGroupedBySeller();
	}

	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupedBySeller() {
		sellerRepository.findAll();
		return repository.successGroupedBySeller();
	}

}