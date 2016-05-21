/**
 * Created by rabbiddog on 5/21/16.
 */
import {Component} from '@angular/core'
import {ChannelComponent} from './channel.component'

@Component({
    selector: 'channel-collection',
    template: `
    <div>
        <chanel></chanel>
    </div>
    `,
    directives: [ChannelComponent]
})
export class ChannelComponent{

}