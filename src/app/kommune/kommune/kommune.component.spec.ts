// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KommuneComponent } from './kommune.component';

describe('KommuneComponent', () => {
  let component: KommuneComponent;
  let fixture: ComponentFixture<KommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KommuneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
