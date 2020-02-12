import { action }  from '@storybook/addon-actions'
import TableHeader from '../src/components/functionalHeader'

export default {
    title: 'functionalHeader'
}

export const index = () => ({
    components: {
        TableHeader
    },
    data() {
        return {
            headers: [
                {
                    id     : 1,
                    label  : 'Title',
                    sorted : true,
                    sortDir: 'asc',
                    width  : '50%'
                },
                {
                    id     : 2,
                    label  : 'Type',
                    sorted : false,
                    sortDir: null
                },
                {
                    id     : 3,
                    label  : 'Credits',
                    sorted : false,
                    sortDir: null
                },
                {
                    id     : 4,
                    label  : 'Completed',
                    sorted : false,
                    sortDir: null
                },
                {
                    id   : 5,
                    label: 'Print'
                }
            ]
        }
    },
    methods   : {
        sortClickedAction: action('sortClicked'),
        setActive(e) {
            console.log(e)
        }
    },
    template  : `<div class="table-responsive p-5">
                    <table class="table table-sm table-striped">       
                        <table-header 
                            :table-headers="headers"
                            @sort="(e) => { sortClickedAction(e);setActive(e); }" 
                        />
                    </table>
                </div>`
})
