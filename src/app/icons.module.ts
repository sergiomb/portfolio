import { NgModule } from '@angular/core'
import { FeatherModule } from 'angular-feather'
import { FilePlus, Send, Download, Bell, UserPlus, Filter, User, RefreshCw, Calendar, CheckSquare, MoreHorizontal, Sliders, DollarSign,
  Users, Trash2, Info, Archive, Edit3, TrendingUp, Settings, LogOut, ArrowLeft, HelpCircle, ArrowDown, ArrowUp, XCircle, AlertCircle,
  Delete, Copy, UserCheck, Mail, ExternalLink, Home, CheckCircle, File, ShoppingBag, Image, Percent, Eye } from 'angular-feather/icons'

// Select some icons (use an object, not an array)
const icons = {
  DollarSign,
  Sliders,
  User,
  Users,
  MoreHorizontal,
  CheckSquare,
  Calendar,
  Filter,
  RefreshCw,
  UserPlus,
  FilePlus,
  Send,
  Bell,
  Download,
  Trash2,
  Info,
  Archive,
  Edit3,
  ArrowLeft,
  ArrowDown,
  ArrowUp,
  TrendingUp,
  Settings,
  LogOut,
  HelpCircle,
  XCircle,
  AlertCircle,
  Delete,
  Copy,
  UserCheck,
  Mail,
  ExternalLink,
  Home,
  CheckCircle,
  File,
  ShoppingBag,
  Image,
  Percent,
  Eye
  }

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }

// NOTES:
// 1. We add FeatherModule to the 'exports', since the <i-feather> component will be used in templates of parent module
// 2. Don't forget to pick some icons using FeatherModule.pick({ ... })
