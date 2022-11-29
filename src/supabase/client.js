import {createClient} from '@supabase/supabase-js'
import {URL, KEY} from './config'
export const supabase = createClient(URL, KEY)