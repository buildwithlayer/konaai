import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initLayerBuilder } from '@buildwithlayer/builder';
import { initLayerChat } from '@buildwithlayer/chat';
import { initLayerCore } from '@buildwithlayer/core';

initLayerBuilder();
initLayerChat();
initLayerCore();

layerBuilder.mount();
layerChat.mount();
layerCore.mount({
  copilot: 'RAG',
  layerApiKey: '30d7d422-b61e-4dbf-b2a4-1a8e7903408e',

  // Do not include this in production code
  layerCustomerApiKey: '93d207b7-9754-403b-8829-376f2ff758c5',
});
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kona-demo';
}
