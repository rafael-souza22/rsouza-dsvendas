package com.rafaelsouza.dsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rafaelsouza.dsvendas.dto.SellerDTO;
import com.rafaelsouza.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {

	@Autowired
	private SellerRepository repository;

	public List<SellerDTO> findAll() {
		return repository.findAll().stream().map(obj -> {
			return new SellerDTO(obj);
		}).collect(Collectors.toList());
	}

}