import { Injectable, signal } from '@angular/core';

export interface ToasterState {
  message: string;
  type: 'success' | 'error';
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  toasterState = signal<ToasterState>({
    message: '',
    type: 'success',
    visible: false,
  });

  private timer?: number;

  show(message: string, type: 'success' | 'error' = 'success', duration: number = 3000): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.toasterState.set({ message, type, visible: true });

    this.timer = window.setTimeout(() => {
      this.hide();
    }, duration);
  }

  hide(): void {
    this.toasterState.update(state => ({ ...state, visible: false }));
  }
}
