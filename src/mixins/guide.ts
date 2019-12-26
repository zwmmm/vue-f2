import Base from './base'

export default {
    mixins: [Base],
    methods: {
        repaint() {
            this.guide.repaint()
        },
    }
}
