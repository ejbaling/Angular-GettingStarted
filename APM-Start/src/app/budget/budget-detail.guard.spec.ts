import { TestBed, async, inject } from '@angular/core/testing';

import { BudgetDetailGuard } from './budget-detail.guard';

describe('BudgetDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetDetailGuard]
    });
  });

  it('should ...', inject([BudgetDetailGuard], (guard: BudgetDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
